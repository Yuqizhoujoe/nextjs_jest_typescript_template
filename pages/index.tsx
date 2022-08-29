import Table from "@/components/Common/Table/Table";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useFetchSample } from "../client/apis/sample";
import { useEffect } from "react";

export default function Home({ sampleData }: { sampleData: string }) {
  const { data, error } = useFetchSample();

  useEffect(() => {
    console.log(sampleData);
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="h-screen">
      <Table />
    </div>
  );
}

// @ts-ignore
export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const sampleData = "Sample";
  return {
    props: {
      sampleData,
    },
  };
};
