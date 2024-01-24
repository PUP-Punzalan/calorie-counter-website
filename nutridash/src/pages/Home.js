import { useState } from "react";
import BarChart from "../components/BarChart";
import NavBar from "../components/NavBar";
import { UserData, remaining_calories } from "../data/CalorieData";

const Home = () => {
  // {remaining_calories <= 0 && remaining_calories = 0}

  const [myData, setMyData] = useState({
    labels: UserData.map((data) => data.label),
    datasets: [
      {
        label: "Calories",
        data: UserData.map((data) => data.calories),
        backgroundColor: [
          remaining_calories === 0 ? "red" : "#3254de",
          "white",
        ],
        spacing: 0,
        rotation: -90,
        borderWidth: 1,
        borderColor: "#e0e0e0",
        cutout: "65%",
        // borderRadius: 10,
      },
    ],
  });

  return (
    <div>
      <NavBar></NavBar>
      <div class="home section--container">
        <div class="home__title">
          <h4>Welcome back, John Doe 👋</h4>
          <p>Here's your daily summary of calories and macronutrients.</p>
        </div>

        <div className="section">
          {/* <div class="calorie--chart">
            <h5>Calorie Intake</h5>
            <div class="calorie__chart">
              <div className="remaining-calories text-info">
                <p className="intake">1200</p>
                <p class="subtitle">out of</p>
                <p className="total">3000</p>
              </div>
              <BarChart chartData={myData}></BarChart>
            </div>
          </div> */}
          <h5>Summary</h5>
          <div className="macros">
            <div className="macro">
              <h5>Calories</h5>
              <div className="remaining">
                <p className="intake">
                  <span class="">1250</span>g
                </p>
                <p class="subtitle">out of</p>
                <p className="total">
                  <span class="">2000</span>g
                </p>
              </div>
            </div>
            <div className="macro">
              <h5>Protein</h5>
              <div className="remaining">
                <p className="intake">
                  <span class="">37.5</span>g
                </p>
                <p class="subtitle">out of</p>
                <p className="total">
                  <span class="">2000</span>g
                </p>
              </div>
            </div>
            <div className="macro">
              <h5>Carbs</h5>
              <div className="remaining">
                <p className="intake">
                  <span class="">1300</span>g
                </p>
                <p class="subtitle">out of</p>
                <p className="total">
                  <span class="">2000</span>g
                </p>
              </div>
            </div>
            <div className="macro">
              <h5>Fats</h5>
              <div className="remaining">
                <p className="intake">
                  <span class="">67</span>g
                </p>
                <p class="subtitle">out of</p>
                <p className="total">
                  <span class="">2000</span>g
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <h5>Today's Meal</h5>
          <div className="meal--categories">
            <div className="meal__category active">Breakfast</div>
            <div className="meal__category">Lunch</div>
            <div className="meal__category">Dinner</div>
            <div className="meal__category">Snacks</div>
          </div>
          <div className="meals--container">
            <div className="meal">
              <div className="meal__intro">
                <div class="meal__name">
                  <span class="material-symbols-rounded">eco</span>
                  <h5>Green Salad</h5>
                </div>
                <div className="meal__quantity">
                  <p>
                    <span>1</span> serving
                  </p>
                  •
                  <p>
                    <span>150</span>g
                  </p>
                </div>
              </div>
              <div className="meal__nutrients">
                <div className="mini-macro">
                  <p className="h7">Calories</p>
                  <p className="mini-macro__grams">
                    <span>150</span>g
                  </p>
                </div>
                <div className="mini-macro">
                  <p className="h7">Proteins</p>
                  <p className="mini-macro__grams">
                    <span>150</span>g
                  </p>
                </div>
                <div className="mini-macro">
                  <p className="h7">Carbs</p>
                  <p className="mini-macro__grams">
                    <span>150</span>g
                  </p>
                </div>
                <div className="mini-macro">
                  <p className="h7">Fats</p>
                  <p className="mini-macro__grams">
                    <span>150</span>g
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <h5>Suggested Meal</h5>
          <div className="meals--container">
            <div className="meal">
              <div className="meal__intro">
                <div class="meal__name">
                  <span class="material-symbols-rounded">eco</span>
                  <h5>Chicken Adobo</h5>
                </div>
                <div className="meal__quantity">
                  <p>
                    <span>1</span> serving
                  </p>
                  •
                  <p>
                    <span>150</span>g
                  </p>
                </div>
              </div>
              <div className="meal__nutrients">
                <div className="mini-macro">
                  <p className="h7">Calories</p>
                  <p className="mini-macro__grams">
                    <span>150</span>g
                  </p>
                </div>
                <div className="mini-macro">
                  <p className="h7">Proteins</p>
                  <p className="mini-macro__grams">
                    <span>150</span>g
                  </p>
                </div>
                <div className="mini-macro">
                  <p className="h7">Carbs</p>
                  <p className="mini-macro__grams">
                    <span>150</span>g
                  </p>
                </div>
                <div className="mini-macro">
                  <p className="h7">Fats</p>
                  <p className="mini-macro__grams">
                    <span>150</span>g
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
