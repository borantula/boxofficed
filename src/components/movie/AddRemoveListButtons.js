import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import {
  movieAddedToSavedList,
  movieRemovedFromSavedList,
  openLoginModal,
} from "../../actions";

const AddRemoveListButtons = ({
  movie,
  savedMovies,
  movieAddedToSavedList,
  movieRemovedFromSavedList,
  openLoginModal,
  user,
  classes,
}) => {
  const isInBag = savedMovies.find(saved => movie.id === saved.id);

  const addFunc = movie =>
    user.isLoggedIn ? movieAddedToSavedList(movie) : openLoginModal();

  return (
    <div className={classes}>
      {!isInBag && (
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => addFunc(movie)}
        >
          <Icon>playlist_add</Icon> Put it in my bag!
        </Button>
      )}

      {isInBag && (
        <Button
          variant="contained"
          color="default"
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
  classes: PropTypes.string,
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.currentUser,
    savedMovies: state.savedMovies,
  };
};

const mapDispatchToProps = {
  movieAddedToSavedList,
  movieRemovedFromSavedList,
  openLoginModal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddRemoveListButtons);
