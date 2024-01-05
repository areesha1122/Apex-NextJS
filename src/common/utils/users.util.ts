"use client";

/**
 * Retrive access token from local storage
 * @returns string | undefined
 */

export const getUser = () => {
  if (typeof window === "object") {
    const user = window.localStorage?.getItem("user");
    if (user !== null) {
      return JSON.parse(user);
    }
  }
  return undefined;
};

