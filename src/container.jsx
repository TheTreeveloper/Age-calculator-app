import { Parameters } from "./parameters";
import { Calculator } from "./calculator";

export const Container = () => {
    return (
        <div className="container">
            <Parameters/>
            <Calculator/>
        </div>
    );
}