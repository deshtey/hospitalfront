import { FC, useState, useEffect } from "react";
import axiosapi from "../utils/API";

const PatientList: FC = () => {
  type Patients = {
    name: string;
    gender: string;
  };
  const [patients, setPatients] = useState<Patients[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const fetchPatients = async () => {
      axiosapi
        .get("/patients")
        .then((res) => {
          setLoading(false);
          setPatients(res.data);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    };
    fetchPatients();
  }, [patients]);
  return <></>;
};

export default PatientList;
