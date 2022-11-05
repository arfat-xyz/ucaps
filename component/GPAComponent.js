import { Button, InputLabel, TextField } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";

const GPAComponent = ({ handleSubmitForOnSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <Box>
        <form
          style={{ marginTop: "30px" }}
          onSubmit={handleSubmit(handleSubmitForOnSubmit)}
        >
          {/* This is for SSC input GPA  */}
          <InputLabel>Enter your GPA with additional subject</InputLabel>
          <TextField
            {...register("ssc", {
              required: "Please input your GPA",
              valueAsNumber: true,
              max: {
                value: 5,
                message: "Max value is 5",
              },
              min: {
                value: 2.5,
                message: "Min value is 2.5",
              },
            })}
            id="ssc"
            type={"number"}
            label="SSC"
            variant="outlined"
            fullWidth
            margin="normal"
            aria-describedby="component-error-text"
            inputProps={{ step: ".01" }}
            color={errors.ssc?.message ? "error" : ""}
          />
          <FormHelperText error>{errors.ssc?.message}</FormHelperText>

          {/* This is for HSC input GPA  */}
          <TextField
            {...register("hsc", {
              required: "Please input your GPA",
              valueAsNumber: true,
              max: {
                value: 5,
                message: "Max value is 5",
              },
              min: {
                value: 2.5,
                message: "Min value is 2.5",
              },
            })}
            id="hsc"
            type={"number"}
            label="HSC"
            variant="outlined"
            fullWidth
            margin="normal"
            aria-describedby="component-error-text"
            inputProps={{ step: ".01" }}
            color={errors.hsc?.message ? "error" : ""}
          />
          <FormHelperText error>{errors.hsc?.message}</FormHelperText>

          <Button fullWidth type="submit" color="success" variant="contained">
            Outlined
          </Button>
        </form>
      </Box>
    </>
  );
};

export default GPAComponent;
