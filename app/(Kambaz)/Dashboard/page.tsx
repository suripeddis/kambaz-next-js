import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />

      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/course1.jpeg" width={200} height={150} alt="ReactJS" />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">Full Stack software developer</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/2345" className="wd-dashboard-course-link">
            <Image src="/course2.jpeg" width={200} height={150} alt="Web Dev" />
            <div>
              <h5>CS2345 Web Dev</h5>
              <p className="wd-dashboard-course-title">Frontend basics</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/3456" className="wd-dashboard-course-link">
            <Image src="/course3.jpeg" width={200} height={150} alt="JavaScript" />
            <div>
              <h5>CS3456 JS</h5>
              <p className="wd-dashboard-course-title">JavaScript</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/4567" className="wd-dashboard-course-link">
            <Image src="/course4.jpeg" width={200} height={150} alt="React Components" />
            <div>
              <h5>CS4567 React</h5>
              <p className="wd-dashboard-course-title">Components</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/5678" className="wd-dashboard-course-link">
            <Image src="/course5.jpeg" width={200} height={150} alt="Node APIs" />
            <div>
              <h5>CS5678 Node</h5>
              <p className="wd-dashboard-course-title">APIs</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/6789" className="wd-dashboard-course-link">
            <Image src="/course6.jpeg" width={200} height={150} alt="Databases" />
            <div>
              <h5>CS6789 DB</h5>
              <p className="wd-dashboard-course-title">Databases</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/7890" className="wd-dashboard-course-link">
            <Image src="/course7.jpeg" width={200} height={150} alt="UX Design" />
            <div>
              <h5>CS7890 UX</h5>
              <p className="wd-dashboard-course-title">Design</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}