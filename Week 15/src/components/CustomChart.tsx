import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

export default function CustomChart() {
  const ctx = useRef(null);
  const [data, setData] = useState([12, 19, 3, 5, 2, 3])

  useEffect(() => {
    const intervalId = setInterval(() => {
        const value = Math.floor(Math.random() * 10)
        console.log(value)
        setData(prevData => {
            return [
                ...prevData,
                value
            ].slice(-200)
        })
    }, 300)

    return () => {
        clearInterval(intervalId)
    }
  }, [])

  useEffect(() => {
    let chart = undefined
    if (ctx.current !== null) {
      chart = new Chart(ctx.current, {
        type: "line",
        data: {
          labels: data.map((_, i) => i),
          datasets: [
            {
              label: "# of Votes",
              data: data,
              borderWidth: 1,
            },
          ],
        },
        options: {
          animation: {
            duration: 0
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      chart.update()
    }

    return () => {
        if(chart !== undefined) {
            chart.destroy()
        }
    }
  }, [data]);

  return <canvas ref={ctx}></canvas>;
}
