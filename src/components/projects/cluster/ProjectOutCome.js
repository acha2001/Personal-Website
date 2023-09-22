const ProjectOutcome = () => {
return(
    <>
        <h4 class="project_title title">
            Outcomes:
        </h4>
        <div class="clust_desc_wrapper">
            <div> 
                In this comprehensive machine learning algorithm report, I embarked on a journey to explore and analyze various ML algorithms, showcasing their implementation, applications, and performance. These algorithms were tested on the MNIST database, a renowned collection of handwritten digit images, where I utilized a subset of the dataset for efficiency.
            </div>
            <div>
                First, I delved into K-Nearest Neighbors (KNN), a versatile supervised learning algorithm. KNN's simplicity and power were highlighted, emphasizing its suitability for image recognition, text classification, and anomaly detection. I examined the impact of different K values on its performance, revealing that while lower K values tend to overfit and introduce noise sensitivity, higher K values yield smoother decision boundaries, enhancing robustness.
            </div>
            <div>
                Next, I explored the unsupervised learning algorithm K-Means. This algorithm was applied to cluster data points into distinct groups. I discussed how the choice of K significantly influences clustering quality and demonstrated how the algorithm partitions data iteratively based on Euclidean distances. K-Means exhibited its proficiency in image segmentation, customer segmentation, and document clustering.
            </div>
            <div>
                Transitioning to neural networks, I introduced Multilayer Perceptrons (MLPs), which consist of interconnected layers of neurons. I elucidated the workings of feedforward neural networks, emphasizing their capacity to learn complex patterns through weight adjustments. I employed a pre-built MATLAB function for classification tasks, underlining their capability for both regression and classification challenges.
            </div>
            <div>
                Lastly, I delved into Convolutional Neural Networks (CNNs), designed primarily for image recognition and computer vision tasks. CNNs were presented as hierarchical feature extractors, mimicking the human visual cortex. I elucidated their architecture, including convolutional layers, pooling layers, and fully connected layers. The CNN demonstrated remarkable accuracy on the MNIST dataset, showcasing their ability to automatically learn hierarchical visual representations.
            </div>
            <div>
                Throughout the report, I incorporated insights from confusion matrices, revealing performance details and potential misclassification patterns. This comprehensive exploration of ML algorithms underscored their unique strengths and applications, presenting them as powerful tools for tackling various machine learning tasks.
            </div>
            <a href="https://docs.google.com/document/d/18CpO9umX8-n6bZRtznBzeeLC6lqmd5yIHWYkxbj2yw8/edit" target="_blank" class="link_text"> Link To The Report</a>
        </div>
    </>



);
}
export default ProjectOutcome