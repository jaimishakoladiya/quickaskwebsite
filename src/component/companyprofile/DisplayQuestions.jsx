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
            <Grid container spacing={3} key={id}>
              <Grid item xs={6}>
                <p>{arr.question}</p>
              </Grid>

              <Grid item xs={2}>
                <h3>
                  <IconButton
                    aria-label="delete"
                    variant="contained"
                    id="delete_question"
                    onClick={() => {
                      props.deletequestion(id);
                    }}
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
