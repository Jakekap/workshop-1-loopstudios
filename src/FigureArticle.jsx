const FigureArticle = ({ src, one, two }) => {
    return (
        <figure className="section__figure--options">
            <img src={src}/>
            <p>{one}<br/>{two}</p>
        </figure>
    );
}

export default FigureArticle;