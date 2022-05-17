import {
  About,
  Blog,
  Contact,
  Header,
  Intro,
  Projects,
  Skills,
  Testimonials,
} from "../components";
import { PostType } from "../types/PostType";
import getPosts from "../utils/getPosts";
import { GetStaticProps } from "next";
import Head from "next/head";
import React, { FC } from "react";

interface Props {
  Posts: [PostType];
}

const Home: FC<Props> = ({ Posts }) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <div className="h-[10vh]">
        <Header />
      </div>

      <main className="mb-10">
        <Intro />
        <About />
        <Testimonials />
        <Projects />
        <Skills />
        <Blog Posts={Posts} />
        <Contact />
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const Posts = await getPosts("avneesh0612");

  return {
    props: {
      Posts: Posts.publication.posts,
    },
    revalidate: 600,
  };
};
