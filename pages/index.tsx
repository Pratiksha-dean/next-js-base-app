import Layout from "@/component/Layout";
import React, { useEffect } from "react";
import { getUserList } from "./api/request";

const Dashboard = ({ users }: any) => {
  const styles: any = {
    width: "100%",
  };

  return (
    <Layout>
      <div style={styles}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item: any, i: number) => {
              return (
                <tr key={item.id}>
                  <th scope="row">{i + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.year}</td>
                  <td>{item.color}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Dashboard;

Dashboard.getInitialProps = async (context: any) => {
  const resp = await getUserList();
  const users = resp.data.data;

  return { users: users };
};
