import { useState } from "react";
import AlgoInfoTable from "./cluster/AlgoInfoOnHover"
import ProjectOutcome from "./cluster/ProjectOutCome";

const ClusteringProj = () => {    

    return (
            <div class="project_view" id="CLUSTERING"> 
                <h1 class="title project_title">
                    Image Clustering and Classification
                </h1>
                <h4 class= "title project_title">
                    Algorithms implemented
                </h4>
                <AlgoInfoTable/>
                <ProjectOutcome/>
            </div>
        );
    };
    export default ClusteringProj;
    