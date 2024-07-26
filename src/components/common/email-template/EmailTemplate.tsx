import { Heading, Hr, Tailwind } from "@react-email/components";
import { Body, Container, Head, Html, Section, Text } from "@react-email/components";

type Props = {
  name: string;
  message: string;
};

const EmailTemplate = ({ name, message }: Props) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-sky-50 text-slate-800">
          <Container>
            <Section className="my-24 px-10 py-5 bg-white rounded-md shadow-md">
              <Heading className="leading-tight">Hi Vicky, Get in touch with me 👋</Heading>
              <Text className="text-slate-700">{message}</Text>
              <Hr />
              <Text>This message from {name}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailTemplate;
