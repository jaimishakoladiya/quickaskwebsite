import React from "react";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

function DisplayQuestions(props) {
  return (
    <div>
      {props.question.interviewque.map((arr, id) => {
        return (
          <>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <h4>{arr.questions}</h4>
              </Grid>
              <Grid item xs={4}>
                <h4>
                  {arr.minutes}:{arr.seconds}
                </h4>
              </Grid>
              <Grid item xs={2}>
                <h4>
                  <IconButton
                    aria-label="delete"
                    variant="contained"
                    id="delete_question"
                    onClick={() => props.deletequestion(id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </h4>
              </Grid>
            </Grid>
          </>
        );
      })}
    </div>
  );
}

export default DisplayQuestions;
