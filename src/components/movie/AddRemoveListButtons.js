import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import {
  movieAddedToSavedList,
  movieRemovedFromSavedList,
} from "../../actions";

const AddRemoveListButtons = ({
  movie,
  savedMovies,
  movieAddedToSavedList,
  movieRemovedFromSavedList,
}) => {
  const isInBag = savedMovies.find(saved => movie.id === saved.id);
  return (
    <div>
      {!isInBag && (
        <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={() => movieAddedToSavedList(movie)}
        >
          <Icon>playlist_add</Icon> Put it in my bag!
        </Button>
      )}

      {isInBag && (
        <Button
          variant="outlined"
          size="small"
          onClick={() => movieRemovedFromSavedList(movie)}
        >
          <Icon>playlist_add_check</Icon>
          Take it outta my bag!
        </Button>
      )}
    </div>
  );
};

AddRemoveListButtons.propTypes = {
  movie: PropTypes.object.isRequired,
  savedMovies: PropTypes.array.isRequired,
  movieAddedToSavedList: PropTypes.func.isRequired,
  movieRemovedFromSavedList: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return {
    savedMovies: state.savedMovies,
  };
};

const mapDispatchToProps = {
  movieAddedToSavedList,
  movieRemovedFromSavedList,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddRemoveListButtons);
