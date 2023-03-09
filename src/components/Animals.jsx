const Animals = ({ list }) => {

    return <div>
        <ul className="animal">
            {list.map(animal => <li className="animal__item">{animal}</li>)}
        </ul>
    </div>;
};

export default Animals;
