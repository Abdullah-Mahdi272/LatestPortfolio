import React from "react";
import { Link } from "react-router-dom";

function Experience() {
  return (
    <div
      style={{
        textAlign: "left", // Ensure text starts from left
        padding: "20px", // Optional padding for aesthetics
      }}
    >
      <br></br>
      <br></br>
      <header>
        <p
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <span style={{ fontSize: "1.5em", fontWeight: "bold", margin: 0 }}>
            Cashier
          </span>
          <span
            style={{
              fontSize: "1em",
              textAlign: "right", // Ensures proper alignment if needed
              flex: 1, // Takes remaining space to push content to the right
            }}
          >
            March 2020 – Dec 2022
          </span>
        </p>
        <p
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <span style={{ fontSize: "1em", fontWeight: "bold", margin: 0 }}>
            Barada Mart
          </span>
          <span
            style={{
              fontSize: "1em",
              textAlign: "right", // Ensures proper alignment if needed
              flex: 1, // Takes remaining space to push content to the right
            }}
          >
            Ottawa, ON
          </span>
        </p>
        <p>
          • Effectively engaged with customers, promptly addressing their
          inquiries and requests.
          <br></br>• Attentively received and considered feedback to enhance
          performance and service quality.
          <br></br>• Acquired proficiency in operating Point of Sale (POS)
          systems, facilitating efficient and accurate transaction processing.
        </p>
      </header>

      <br></br>
      <br></br>
      <br></br>

      <header>
        <p
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <span style={{ fontSize: "1.5em", fontWeight: "bold", margin: 0 }}>
            Vendor
          </span>
          <span
            style={{
              fontSize: "1em",
              textAlign: "right", // Ensures proper alignment if needed
              flex: 1, // Takes remaining space to push content to the right
            }}
          >
            April 2021 – June 2021
          </span>
        </p>
        <p
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <span style={{ fontSize: "1em", fontWeight: "bold", margin: 0 }}>
            Ferme Grover
          </span>
          <span
            style={{
              fontSize: "1em",
              textAlign: "right", // Ensures proper alignment if needed
              flex: 1, // Takes remaining space to push content to the right
            }}
          >
            Ottawa, ON
          </span>
        </p>
        <p>
          • Organized work hours independently, ensuring productive and
          efficient use of time.
          <br></br>• Exercised a sharp eye for detail, maintaining the aesthetic
          appeal and organization of plants and products.
          <br></br>• Proficiently managed inventory, ensuring products were
          consistently stocked and available to customers.
        </p>

        {/* <Link to="/">Go back</Link> */}
      </header>
      <br></br>
      <br></br>
      <br></br>
      <header>
        <p
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <span style={{ fontSize: "1.5em", fontWeight: "bold", margin: 0 }}>
            Cashier
          </span>
          <span
            style={{
              fontSize: "1em",
              textAlign: "right", // Ensures proper alignment if needed
              flex: 1, // Takes remaining space to push content to the right
            }}
          >
            July 2021 – Sept 2021
          </span>
        </p>
        <p
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <span style={{ fontSize: "1em", fontWeight: "bold", margin: 0 }}>
            Tim Hortons
          </span>
          <span
            style={{
              fontSize: "1em",
              textAlign: "right", // Ensures proper alignment if needed
              flex: 1, // Takes remaining space to push content to the right
            }}
          >
            Ottawa, ON
          </span>
        </p>
        <p>
          • Delivered outstanding customer service while operating the cash
          register, taking orders, and interacting with patrons.
          <br></br>• Developed strong communication skills in interactions with
          both customers and colleagues, ensuring seamless coordination in a
          fast-paced environment
          <br></br>• Adapted to changing customer demands and operational
          requirements, showcasing flexibility and the ability to thrive in a
          dynamic work setting
        </p>
      </header>

      <br></br>
      <br></br>
      <br></br>

      <header>
        <p
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <span style={{ fontSize: "1.5em", fontWeight: "bold", margin: 0 }}>
            Camp Counselor
          </span>
          <span
            style={{
              fontSize: "1em",
              textAlign: "right", // Ensures proper alignment if needed
              flex: 1, // Takes remaining space to push content to the right
            }}
          >
            July 2023 – Aug 2023
          </span>
        </p>
        <p
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <span style={{ fontSize: "1em", fontWeight: "bold", margin: 0 }}>
            STEM Camp
          </span>
          <span
            style={{
              fontSize: "1em",
              textAlign: "right", // Ensures proper alignment if needed
              flex: 1, // Takes remaining space to push content to the right
            }}
          >
            Ottawa, ON
          </span>
        </p>
        <p>
          • Led interactive coding sessions at a summer camp, employing
          inquiry-based learning methods to engage campers in block coding and
          Python.
          <br></br>• Collaborated with fellow counselors to devise diverse and
          interactive coding activities, stimulating campers’ creativity and
          problem-solving skills.
          <br></br>• Motivated and guided campers to conceive and create their
          own coding projects, fostering autonomy and creativity in their
          learning journey.
        </p>

        <Link to="/">Go back</Link>
      </header>
    </div>
  );
}

export default Experience;
