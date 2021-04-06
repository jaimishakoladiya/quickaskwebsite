import React from "react";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

function DisplayQuestions(props) {

  return (
    <div>
      {props.question.map((arr, id) => {

        return (
          <>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <p>{arr.questions}</p>
              </Grid>
              <Grid item xs={4}>


                <h3>
                  {arr.minutes}:{arr.seconds}
                </h3>
              </Grid>
              <Grid item xs={2}>
                <h3>
                  <IconButton
                    aria-label="delete"
                    variant="contained"
                    id="delete_question"
                    onClick={() =>{ 
                      console.log("hii")
                      props.deletequestion(id)}}
                  >
                    <DeleteIcon />
                  </IconButton>
                </h3>
              </Grid>
            </Grid>
          </>
        );
      })}
    </div>
  );
}

export default DisplayQuestions;
