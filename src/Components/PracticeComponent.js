import React from 'react'
import CallBackParentComponent from './Practice_Component/Hooks/Use_Call_back/CallBackParentComponent'
import CounterComponent from './Practice_Component/Hooks/Custom_Hook/CounterComponent'
import UseReducerComponent from './Practice_Component/Hooks/UseReduceComponent'
import UseMemoComponent from './Practice_Component/Hooks/UseMemoComponent'
import Component_1 from './Practice_Component/Hooks/Props_driling/Component_1'
import ContextParentComponent from './Practice_Component/Hooks/Context/ContextParentComponent'
import FragmentComponent from './Practice_Component/Fragment/FragmentComponent'
import ParentForwardRef from './Practice_Component/ForwardRefHook/ParentForwardRef'
import LiftingStateup from './Practice_Component/lifting_Stateup/ParentComponent'
import StyleComponent from './Practice_Component/Style/StyleComponent'
import UserefHookComponent from './Practice_Component/Hooks/UserefHookComponent'
import SimpleFormValidation from './Practice_Component/Form/SimpleFormValidation'
import ListandKeysComponent from './Practice_Component/List_and_keys/ListandKeysComponent'
import UseEffectHookComponent from './Practice_Component/Hooks/UseEffectHookComponent'
import StatehooksComponent from './Practice_Component/Hooks/StateHooksComponent'
import ParentComponent from './Practice_Component/lifting_Stateup/ParentComponent'
import FunctionComponent1 from './Practice_Component/FunctionComponent.js/Function_1'
import ClassComponent1 from './ClassComponent.js/ClassComponent1'

export default function PracticeComponent() {
  return (
    <>
       <ClassComponent1 />
      <FunctionComponent1 />
      <ParentComponent />
      <StatehooksComponent />
      <UseEffectHookComponent />
      <ListandKeysComponent />
      <SimpleFormValidation />
      <UserefHookComponent />
      <StyleComponent />
      <LiftingStateup />
      <ParentForwardRef />
      <FragmentComponent />
      <ContextParentComponent />
      <Component_1 />
      <UseMemoComponent />
      <UseReducerComponent />
      <CounterComponent />
      <CallBackParentComponent />
    </>
  )
}
