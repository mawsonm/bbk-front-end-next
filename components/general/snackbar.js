import React, { useContext } from "react";
import { ReactDOM } from "react-dom";
import SnackbarContext from "@/store/snackbar-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  faExclamationTriangle,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

const Snackbar = () => {
  const snackbarCtx = useContext(SnackbarContext);
  return (
    <div
      className={`${
        snackbarCtx.isDisplayed
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      } flex justify-between items-center rounded mx-auto left-[15%] right-[15%] transition-all ${
        snackbarCtx.isSuccess ? "bg-green-400" : "bg-yellow-200"
      } p-4 fixed z-10 bottom-[40px]`}
    >
      <div className="flex gap-4 items-center">
        {snackbarCtx.isSuccess ? (
          <FontAwesomeIcon icon={faCircleCheck} color={"#16a34a"} />
        ) : (
          <FontAwesomeIcon icon={faExclamationTriangle} color={"#ca8a04"} />
        )}
        <span
          className={`${
            snackbarCtx.isSuccess ? "text-neutral-50" : "text-neutral-800"
          }`}
        >
          {snackbarCtx.msg}{" "}
          {snackbarCtx.isSuccess && (
            <Link
              className="text-red-100 hover:opacity-50 transition-all"
              href={`/recipe/${snackbarCtx.id}`}
            >
              here.
            </Link>
          )}
        </span>
      </div>
      <span
        className={`${
          snackbarCtx.isSuccess ? "text-green-600" : "text-yellow-600"
        } cursor-pointer hover:opacity-50 transition-all`}
        onClick={snackbarCtx.onClose}
      >
        DISMISS
      </span>
    </div>
  );
};

export default Snackbar;
