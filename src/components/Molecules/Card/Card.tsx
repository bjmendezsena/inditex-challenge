import { useMultiStyleConfig as useChakraMultiStyleConfig } from "@chakra-ui/system";
import { VStack as ChakraVStack } from "@chakra-ui/react";
import {
  Card as ChakraCard,
  CardProps as ChakraCardProps,
  CardBody as ChakraCardBody,
  CardBodyProps as ChakraCardBodyProps,
  CardHeader as ChakraCardHeader,
  CardHeaderProps as ChakraCardHeaderProps,
  CardFooter as ChakraCardFooter,
  CardFooterProps as ChakraCardFooterProps,
} from "@chakra-ui/card";
import { BaseMultiStyleConfiguration } from "../../../theme";
import { Avatar, Spinner, Text } from "../../Atoms";
import { useHover } from "../../../hooks";

export const cardPartsList: (
  | "body"
  | "header"
  | "footer"
  | "container"
  | "avatar"
  | "title"
  | "description"
  | "content"
)[] = [
  "body",
  "header",
  "footer",
  "container",
  "avatar",
  "title",
  "description",
  "content",
];

type Parts = typeof cardPartsList;

export interface CardThemeConfig extends BaseMultiStyleConfiguration<Parts> {}

export interface CardProps extends ChakraCardProps {
  headerProps?: ChakraCardHeaderProps;
  bodyProps?: ChakraCardBodyProps;
  footerProps?: ChakraCardFooterProps;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  isLoading?: boolean;
  img?: string;
  title?: string;
  description?: string;
}

export const Card = ({
  headerProps,
  bodyProps,
  footerProps,
  header,
  footer,
  isLoading,
  img,
  ...props
}: CardProps) => {
  const [bodyRef, isHoveredBody] = useHover();
  const [avatarRef, isHoveredAvatar] = useHover();
  const styles = useChakraMultiStyleConfig("Card", {
    isLoading,
    isHovered: isHoveredBody || isHoveredAvatar,
  });

  return (
    <ChakraCard {...props} sx={styles.container}>
      <ChakraCardHeader sx={styles.header} {...headerProps}>
        <Avatar
          ref={avatarRef}
          src={img}
          isLoading={isLoading}
          size='lg'
          sx={styles.avatar}
        />
      </ChakraCardHeader>

      <ChakraCardBody ref={bodyRef} sx={styles.body} {...bodyProps}>
        {isLoading ? <Spinner /> : <Content {...props} />}
      </ChakraCardBody>
      {footer && !isLoading && (
        <ChakraCardFooter sx={styles.footer} {...footerProps}>
          {footer}
        </ChakraCardFooter>
      )}
    </ChakraCard>
  );
};

export interface ContentProps
  extends Pick<CardProps, "title" | "description"> {}

export const Content = ({ title, description }: ContentProps) => {
  const styles = useChakraMultiStyleConfig("Card");
  return (
    <ChakraVStack sx={styles.content}>
      <Text sx={styles.title}>{title}</Text>
      <Text sx={styles.description}>{description}</Text>
    </ChakraVStack>
  );
};
