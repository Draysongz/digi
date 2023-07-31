import { IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export function BackButton() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <IconButton
      as={ChevronLeftIcon}
      bg={"#fff"}
      color={"#000"}
      boxShadow="sm"
      rounded={"full"}
      mb={5}
      onClick={goBack}
    />
  );
}
