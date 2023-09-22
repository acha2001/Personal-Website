import { useState } from "react";

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
                            onMouseOver={mouseOverKnn}
                            onMouseOut={mouseOut}>
                            KNN
                        </h4>
                        <h4 onMouseOver={mouseOverKmean}
                            onMouseOut={mouseOut}
                            class="fit_content hover_text">
                            K-Means
                        </h4>                        
                        <h4 onMouseOver={mouseOverCnn}
                            onMouseOut={mouseOut}
                            class="fit_content hover_text">
                            Convolution Nueral Networks
                        </h4>
                        <h4 onMouseOver={mouseOverMlp}
                            onMouseOut={mouseOut}
                            class="fit_content hover_text no_margin_bottom ">
                            Multilayer Perceptrons                            
                        </h4> 
                    </div>
                    <div class="table_text ">
                        {hoverState==0 && <div>HOVER TO SEE DESCRIPTION</div>}
                        {hoverState==1 && <div>K-Nearest Neighbors (KNN) clustering is a simple but effective unsupervised machine learning algorithm used for data clustering and classification. It groups data points into clusters based on their similarity to their k-nearest neighbors in a feature space. KNN assigns each data point to the cluster that has the majority of its nearest neighbors, making it particularly useful for pattern recognition and data segmentation tasks.</div> }
                        {hoverState==2 && <div>KMEAN INFO</div> }
                        {hoverState==3 && <div>CNN INFO</div> }
                        {hoverState==4 && <div>MLP INFO</div> }
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
