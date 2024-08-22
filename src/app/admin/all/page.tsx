"use client";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [users, setUsers] = useState<User []>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setUsers(result.data); // Assuming your API response contains user data in `data`
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="container mx-auto p-6 font-mono">
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="px-4 py-3">Nom</th>
                <th className="px-4 py-3">Prenom</th>
                <th className="px-4 py-3">NNI</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {users.map((user: User, index: number) => (
                <tr className="text-gray-700" key={index}>
                  <td className="px-4 py-3 border">{user.nom}</td>
                  <td className="px-4 py-3 border">{user.prenom}</td>
                  <td className="px-4 py-3 border">{user.nni}</td>
                  <td className="px-4 py-3 border">{user.phone}</td>
                  <td className="px-4 py-3 border">{user.email}</td>
                  <td className="px-4 py-3 border">
                    <button className="text-red-500">Delete</button>
                    <button className="text-blue-500 ml-2">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// User type definition
