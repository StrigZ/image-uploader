import { gql } from "@apollo/client";
import { GetServerSideProps } from "next/types";
import UploadSuccess from "../../components/UploadSuccess";
import apolloClient from "../../lib/apollo";

type Props = {
  downloadUrl: string;
};

const index = ({ downloadUrl }: Props) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <UploadSuccess downloadUrl={downloadUrl} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const firebaseId = context.params?.firebaseId;
  try {
    const { data } = await apolloClient.query({
      query: gql`
        query findImageByIdQuery($firebaseId: String!) {
          findImageById(firebaseId: $firebaseId) {
            downloadUrl
          }
        }
      `,
      variables: { firebaseId },
    });
    const downloadUrl = data.findImageById.downloadUrl;

    return {
      props: {
        downloadUrl,
      },
    };
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
    return {
      props: {},
    };
  }
};
export default index;
