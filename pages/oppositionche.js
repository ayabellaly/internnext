import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from 'next/link'

export default function data() {
    return (
      <div>
       <div className="card">
  <div className="card-body ">
    <h5 className="card-title">Visionner les faux chèques</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <Link href="/oppositionche">
          <a className="btn btn-success">Visionner</a>
        </Link>
  </div>
</div>

<div className="card">
  <div className="card-body ">
    <h5 className="card-title">Visionner les chèques annulés</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <Link href="/annulationche">
          <a className="btn btn-success">Visionner</a>
        </Link>
  </div>
</div>
      </div>
    );
  }









