import VariablesAndConstants from "./VariablesAndConstants";
import BooleanVariables from "./BooleanVariables";
import VariableTypes from "./VariableTypes";
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator"
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInLine";
import LegacyFunctions from "./LegacyFunctions";
import ArrowFunctions from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedReturn";
import SimpleArrays from "./SimpleArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import FindFunction from "./FindFunction";
import ForLoops from "./ForLoops"
import MapFunction from "./MapFunctions"
import FindIndex from "./FindIndex";
import FilterFunction from "./FilterFunctions"
import JsonStringify from "./JsonStringify";
import House from "./House";
import Spreading from "./Spreader";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";
import DestructingImports from "./DestructingImports";
import Classes from "./Classes";
import Styles from "./Styles"
import Add from "./Add";
import HighlightComponent from "./Highlight";
import Square from "./Square"
import PathParameters from "./PathParameters";
import TodoList from "./todos/TodoList";
export default function Lab3() {
  console.log("Hello World!");
  return(
    <div id="wd-lab3">
      <h3>Lab 3</h3>
      <h4>Square of 4</h4>
      <VariablesAndConstants/>
      <BooleanVariables />
      <VariableTypes />
      <IfElse />
      <TernaryOperator />
      <ConditionalOutputIfElse />
      <ConditionalOutputInline />
      <LegacyFunctions />
      <ArrowFunctions />
      <ImpliedReturn />
      <SimpleArrays />
      <ArrayIndexAndLength />
      <AddingAndRemovingToFromArrays /> 
      <FindFunction />
      <ForLoops />
      <MapFunction />
      <FindIndex />
      <FilterFunction />
      <JsonStringify />
      <House />
      <Spreading />
      <Destructing />
      <FunctionDestructing />
      <DestructingImports />
      <Classes />
      <Styles />
      <Add a={3} b={4} />
      <Square>4</Square>
      <HighlightComponent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione
        eaque illo minus cum, saepe totam vel nihil repellat nemo explicabo
        excepturi consectetur. Modi omnis minus sequi maiores, provident
        voluptates.
      </HighlightComponent>
      <PathParameters />
      <TodoList />
      <hr />
    </div>
  );
}
