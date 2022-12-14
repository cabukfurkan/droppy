import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

// Component
import Button from "../../components/Button";

// Styles
import style from "./NewUserForm.module.css";
import appStyle from "../../App.module.css";
import NotifierContext from "../../context/NotifierContext";

export default function AddCarForm(props) {
  const { notifier } = useContext(NotifierContext);

  const [allInputs, setAllInputs] = useState({
    contact: "",
    plate: "",
    width: "",
    height: "",
    length: "",
  });

  const [allFilled, setAllFilled] = useState(false);

  useEffect(() => {
    if (
      allInputs.contact &&
      allInputs.plate &&
      allInputs.width &&
      allInputs.height &&
      allInputs.length
    ) {
      setAllFilled(true);
    } else {
      setAllFilled(false);
    }
  }, [allInputs]);

  const isCar = () => {
    notifier("Success! Drive safe.");
  };
  const isNotCar = () => {
    notifier("Success! Good luck with your first request.");
  };

  function submitHandler(e) {
    e.preventDefault();

    const vehicleInfo = {
      _id: localStorage.getItem("userID"),
      ...allInputs,
    };

    props.onAddCar(vehicleInfo);
  }

  return (
    <div>
      <p className={appStyle.boldBodyDesktop}>
        *To register your car fill all the fields*
      </p>
      <form onSubmit={submitHandler}>
        <div>
          <input
            type="text"
            onChange={(e) =>
              setAllInputs({ ...allInputs, contact: e.target.value })
            }
            id="contact"
            aria-label="contact info"
            placeholder="Phone number*"
            className={style.signupInput}
            value={allInputs.contact}
          />
        </div>
        <div>
          <input
            type="text"
            onChange={(e) =>
              setAllInputs({ ...allInputs, plate: e.target.value })
            }
            id="plate"
            aria-label="plate number"
            placeholder="Plate Number*"
            className={style.signupInput}
            value={allInputs.plate}
          />
        </div>
        <div>
          <h3 className={appStyle.bodyDesktop}>
            Available Car Space for Items (W x H x L)
          </h3>
          <div className={style.dimensionsContainer}>
            <input
              type="number"
              min="0"
              onChange={(e) =>
                setAllInputs({ ...allInputs, width: e.target.value })
              }
              id="width"
              aria-label="width"
              placeholder="00cm*"
              className={style.sizeInput}
              value={allInputs.width}
            />
            <input
              type="number"
              min="0"
              onChange={(e) =>
                setAllInputs({ ...allInputs, height: e.target.value })
              }
              id="height"
              aria-label="height"
              placeholder="00cm*"
              className={style.sizeInput}
              value={allInputs.height}
            />
            <input
              type="number"
              min="0"
              onChange={(e) =>
                setAllInputs({ ...allInputs, length: e.target.value })
              }
              id="length"
              aria-label="length"
              placeholder="00cm*"
              className={style.sizeInput}
              value={allInputs.length}
            />
          </div>
        </div>
        {allFilled === true ? (
          <div>
            <p className={appStyle.bodyDesktop}>Let&apos; add your car!</p>
            <div className={style.singleBtn}>
              <Button type="submit" class="buttonBorder" buttonHandler={isCar}>
                Register car and sign up
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <p className={appStyle.bodyDesktop}>
              Don&apos;t want to be a driver? No problem.
            </p>
            <div className={style.singleBtn}>
              <Button
                path="/dashboard"
                type="submit"
                class="button"
                buttonHandler={isNotCar}
              >
                Sign up without car
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

AddCarForm.propTypes = {
  onAddCar: PropTypes.func.isRequired,
};
