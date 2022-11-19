import { Button, InputLabel, TextField } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";

const GPAComponent = ({
  handleSubmitForOnSubmit,
  systemOfStudy,
  selectedLevelOfStudy,
}) => {
  console.log("systemOfStudy.igcse", systemOfStudy);

  // take important values from useForm which given by react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log("errors: ", errors);
  return (
    <>
      <Box>
        <form
          style={{ marginTop: "30px" }}
          onSubmit={handleSubmit(handleSubmitForOnSubmit)}
        >
          {/* This is for SSC input GPA  */}
          {(systemOfStudy.value !== "sat") &
          (systemOfStudy.value !== "igcse/a'level") ? (
            <InputLabel>
              {selectedLevelOfStudy?.value === "bachelors"
                ? "Please enter your GPA"
                : "Please enter your CGPA/Score"}
            </InputLabel>
          ) : (
            ""
          )}
          {systemOfStudy.value === "sat" && (
            <InputLabel>Please enter your score</InputLabel>
          )}
          {selectedLevelOfStudy?.value !== "masters" && (
            <>
              {(systemOfStudy.value !== "sat") &
              (systemOfStudy.value !== "igcse/a'level") ? (
                <>
                  <TextField
                    {...register("ssc", {
                      required: "Please input your GPA",
                      valueAsNumber: true,
                      max: {
                        value: 5,
                        message: "Maximum GPA is 5",
                      },
                      min: {
                        value: 2.5,
                        message: "Minimum GPA is 2.5",
                      },
                    })}
                    id="ssc"
                    type={"number"}
                    label={
                      systemOfStudy.value === "dakhil/alim" ? "Dakhil" : "SSC"
                    }
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    aria-describedby="component-error-text"
                    inputProps={{ step: ".01" }}
                    color={errors.ssc?.message ? "error" : ""}
                  />
                  <FormHelperText error>{errors.ssc?.message}</FormHelperText>
                </>
              ) : (
                ""
              )}
            </>
          )}

          {/* This is for HSC input GPA  */}
          {(selectedLevelOfStudy?.value !== "masters") |
          (selectedLevelOfStudy?.value === "bachelors") ? (
            <>
              {(systemOfStudy.value !== "sat") &
              (systemOfStudy.value !== "igcse/a'level") ? (
                <>
                  <TextField
                    {...register("hsc", {
                      required: "Please input your GPA",
                      valueAsNumber: true,
                      max: {
                        value: 5,
                        message: "Maximum GPA is 5",
                      },
                      min: {
                        value: 2.5,
                        message: "Minimum GPA is 2.5",
                      },
                    })}
                    id="hsc"
                    type={"number"}
                    label={
                      systemOfStudy.value === "dakhil/alim" ? "Alim" : "HSC"
                    }
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    aria-describedby="component-error-text"
                    inputProps={{ step: ".01" }}
                    color={errors.hsc?.message ? "error" : ""}
                  />
                  {errors?.hsc?.message ? (
                    <FormHelperText error>{errors.hsc?.message}</FormHelperText>
                  ) : (
                    ""
                  )}
                </>
              ) : (
                ""
              )}
            </>
          ) : (
            ""
          )}

          {/* This is for IGCSE & A'Level  */}
          {systemOfStudy.value === "igcse/a'level" && (
            <>
              <InputLabel>Please enter your 5 best IGCSE grades</InputLabel>
              {systemOfStudy.igcse.map((subject, index) => (
                <>
                  <InputLabel> {subject.label} </InputLabel>
                  <select
                    defaultValue={false}
                    {...register(subject.value, {
                      required: "Select an option",
                      valueAsNumber: true,
                      max: {
                        value: 5,
                        message: "Need to select a value",
                      },
                      min: {
                        value: 2,
                        message: "Need to select a value",
                      },
                    })}
                    name={subject.value}
                  >
                    <option value={""}></option>
                    {subject.options.map((option, index) => (
                      <option value={option.value} key={index}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </>
              ))}

              <InputLabel>
                Please enter your min 2 best A'Level grades
              </InputLabel>
              {systemOfStudy.aLebel.map((subject, index) => (
                <>
                  <InputLabel> {subject.label} </InputLabel>
                  <select
                    defaultValue={false}
                    {...register(subject.value, {
                      required: "Select an option",
                      valueAsNumber: true,
                      max: {
                        value: 5,
                        message: "Need to select a value",
                      },
                      min: {
                        value: 2,
                        message: "Need to select a value",
                      },
                    })}
                    name={subject.value}
                  >
                    <option value={""}></option>
                    {subject.options.map((option, index) => (
                      <option value={option.value} key={index}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </>
              ))}
            </>
          )}

          {/* THis is for SAT  */}
          {systemOfStudy.value === "sat" && (
            <>
              <TextField
                {...register("sat", {
                  required: "Please enter your score",
                  valueAsNumber: true,
                  max: {
                    value: 1600,
                    message: "Maximum score is 1600",
                  },
                  min: {
                    value: 400,
                    message: "Minimum score is 400",
                  },
                })}
                id="sat"
                type={"number"}
                label="SAT"
                variant="outlined"
                fullWidth
                margin="normal"
                aria-describedby="component-error-text"
                inputProps={{ step: ".01" }}
                color={errors.ssc?.message ? "error" : ""}
              />
              <FormHelperText error>{errors.sat?.message}</FormHelperText>
            </>
          )}
          {/* This is for GRE / GMAT input GPA  */}
          {selectedLevelOfStudy?.value === "masters" ? (
            <TextField
              {...register(systemOfStudy?.value, {
                required: "Please enter your score",
                valueAsNumber: true,
                max: {
                  value:
                    systemOfStudy?.value === "gmat"
                      ? 800
                      : systemOfStudy.value === "gre"
                      ? 340
                      : 4,
                  message: `${
                    systemOfStudy?.value === "gmat"
                      ? "Maximum score is 800"
                      : systemOfStudy.value === "gre"
                      ? "Maximum score is 340"
                      : "Maximum CGPA is 4"
                  }`,
                },
                min: {
                  value:
                    systemOfStudy?.value === "gmat"
                      ? 200
                      : systemOfStudy?.value === "gre"
                      ? 260
                      : 2,
                  message: `${
                    systemOfStudy?.value === "gmat"
                      ? "Minimum score is  200"
                      : systemOfStudy?.value === "gre"
                      ? "Minimum score is  260"
                      : "Minimum CGPA is  2"
                  }`,
                },
              })}
              id={systemOfStudy?.value}
              type={"number"}
              label={systemOfStudy?.label}
              variant="outlined"
              fullWidth
              margin="normal"
              aria-describedby="component-error-text"
              inputProps={{ step: ".01" }}
              color={errors.hsc?.message ? "error" : ""}
            />
          ) : (
            ""
          )}
          {errors?.gre?.message ? (
            <FormHelperText error>{errors.gre?.message}</FormHelperText>
          ) : (
            ""
          )}
          {errors?.gmat?.message ? (
            <FormHelperText error>{errors.gmat?.message}</FormHelperText>
          ) : (
            ""
          )}
          {errors?.cgpa?.message ? (
            <FormHelperText error>{errors.cgpa?.message}</FormHelperText>
          ) : (
            ""
          )}

          <Button fullWidth type="submit" color="success" variant="outlined">
            Submit
          </Button>
        </form>
      </Box>
    </>
  );
};

export default GPAComponent;
