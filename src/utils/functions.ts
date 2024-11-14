export const ProfileImage = (imagePath: string) => {
  const baseURL = "http://92.205.111.2:9999/";

  const imageUrl = `${baseURL}/${imagePath.replace(/\\/g, "/")}`;

  return imageUrl;
};
