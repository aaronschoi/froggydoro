import { Route, Switch } from "react-router";
import FroggyForm from "./FroggyForm/FroggyForm";
import FroggyTimer from "./FroggyTimer/FroggyTimer";

export default function FroggyDoro() {
  return (
    <div className="froggydoro-container">
    <Switch>
      <Route exact path="/form">
        <FroggyForm />
      </Route>
      <Route path="/">
        <FroggyTimer />
      </Route>
    </Switch>
    </div>
  );
}
