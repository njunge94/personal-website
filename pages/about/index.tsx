import Head from "next/head";
import Container from "../../components/container";
import Layout from "../../components/layout";
import SocialCard from "../../components/social-card";

type Props = {
  preview: boolean,
}

export default function AboutIndex({ preview }: Props) {
  return (
    <Layout>
      <Head>
        <title>About me</title>
      </Head>
      <Container>
        <SocialCard />
      </Container>
    </Layout>
  );
}