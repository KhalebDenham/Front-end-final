// Stars: a one to five-star rating component that allows users to rate something (movies in this case, but remember that components are reusable, so you could use it elsewhere!)
import React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

export default class Stars extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }
  render() {
    return (
      <Box sx={{ "& > legend": { mt: 2 } }}>
        <Rating
          value={this.state.value}
          onChange={(event, newValue) => {
            this.setState({value: newValue});
            this.props.handleRating(newValue)
          }}
        />
      </Box>
    );
  }
}
