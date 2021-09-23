import {Action, ActionOptions, ActionType, StateContext} from '@ngxs/store';
import produce, {Draft} from 'immer';

/**
 * Sort cut function allow to update NGXS state using immer.js
 * @param ctx NGXS State context
 * @param callback where make changes of the estate
 *
 * Usage example:
 *
 * update(ctx, draft => {
 *   // Place where update state
 *   draft.stateProperty = 'newValue'
 * })
 */
export const update = <Base, D = Draft<Base>>(
  ctx: StateContext<Base>,
  callback: (draft: D) => void) => {
  ctx.setState(produce(ctx.getState(), callback));
};

/**
 * Decorator used to update NGXS state using immer.js
 *
 * Usage example:
 *
 * @Action(NamedAction)
 * @Produce
 * namedAction(draft: StateModel, action: NamedAction, ctx: StateContext<any>){
 *   // Place where update state
 *   draft.stateProperty = 'newValue'
 * }
 *
 */
export function Produce(): (_target: any, _key: string, descriptor: PropertyDescriptor) => PropertyDescriptor {
  return (_target: any, _key: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
    const method = descriptor.value;

    descriptor.value = (ctx: StateContext<any>, action: any, ...args: any[]) => {
      // @ts-ignore
      update(ctx, draft => method.apply(this, [draft, action, ctx]));
    };
    return descriptor;
  };
}

/**
 * Joins NGXS Action decorator with Produce decorator
 *
 * Usage example:
 *
 * @ProduceAction(NamedAction)
 * namedAction(draft: StateModel, action: NamedAction, ctx: StateContext<any>){
 *   // Place where update state
 *   draft.stateProperty = 'newValue'
 * }
 *
 */
export function ProduceAction(action: ActionType, options?: ActionOptions): MethodDecorator {
  return (target: any, name: string | symbol, descriptor: PropertyDescriptor): TypedPropertyDescriptor<any> => {
    Action(action, options)(target, name, descriptor);
    // @ts-ignore
    return Produce()(null, null, descriptor);
  };
}
