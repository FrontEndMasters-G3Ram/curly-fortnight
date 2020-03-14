import React from "react";
import pet from "@frontendmasters/pet";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  async componentDidMount() {
    try {
      const myAnimal = await pet.animal(this.props.id);
      this.setState({
        name: myAnimal.name,
        animal: myAnimal.type,
        location: `${myAnimal.contact.address.city}, ${myAnimal.contact.address.state}`,
        description: myAnimal.description,
        media: myAnimal.photos,
        breed: myAnimal.breeds.primary,
        loading: false
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    if (this.state.loading) {
      return <h1>...is loading</h1>;
    }
    const { animal, breed, location, description, name } = this.state;

    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Details;
