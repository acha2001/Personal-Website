import { useState } from "react";
import KnnInfo from "./KnnInfo";
import KmeanInfo from "./KmeanInfo"
import CnnInfo from "./CnnInfo"
import MlpInfo from "./MlpInfo"

const AlgoInfoTable = () => {

    const[hoverState, setHoverState] = useState(0);

    const mouseOverKnn = () => {
        setHoverState(1);
    };
    const mouseOverKmean = () => {
        setHoverState(2);
    };
    const mouseOverCnn = () => {
        setHoverState(3)
    };
    const mouseOverMlp = () => {
        setHoverState(4);
    };
    const mouseOut = () => {
        setHoverState(0);
    };

    return (    
        <>  
            <div class="my_table">
                <div class="table_header">
                    <h4 class ="header_child1">Algorithm:</h4>
                    <h4 class ="header_child2">Description:</h4>
                </div>
                <div class="tabel_content">
                    <div class="tabel_label">
                        <h4 class="fit_content hover_text"
                            onMouseOver={mouseOverKnn}>
                            KNN
                        </h4>
                        <h4 onMouseOver={mouseOverKmean}
                            
                            class="fit_content hover_text">
                            K-Means
                        </h4>                        
                        <h4 onMouseOver={mouseOverCnn}
                            
                            class="fit_content hover_text">
                            Convolution Nueral Networks
                        </h4>
                        <h4 onMouseOver={mouseOverMlp}
                            
                            class="fit_content hover_text no_margin_bottom ">
                            Multilayer Perceptrons                            
                        </h4> 
                    </div>
                    <div class="table_text ">
                        {hoverState==0 && <div>HOVER TO SEE DESCRIPTION</div>}
                        {hoverState==1 && <KnnInfo/> }
                        {hoverState==2 && <KmeanInfo/> }
                        {hoverState==3 && <CnnInfo/> }
                        {hoverState==4 && <MlpInfo/> }
                    </div>
                </div>
            </div>                       
        </>
    );


}
export default AlgoInfoTable



const FitContent = {
    height: "fit-content",
    width: "fit-content"
}
