/* eslint-disable no-console */
import React from "react";
import pet from "@frontendmasters/pet";

class Details extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     loading: true
  //   };
  // }

  state = { loading: true };
  async componentDidMount() {
    try {
      const { animal } = await pet.animal(this.props.id);
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
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
