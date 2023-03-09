const Animals = () => {
    const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
    return <div>
        <ul className="animal">
            {animals.map(animal => <li>{animal}</li>)}
        </ul>
    </div>;
};

export default Animals;
