const Person = ({ image, name, age }) => {
  return (
    <articale className="person">
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </articale>
  );
};

export default Person;
