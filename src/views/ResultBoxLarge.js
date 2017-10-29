import React from "react";

const getContent = (options, onClick, userInput, isLoadingIconShown) => {
    if (options && options.length) return getListContent(options, onClick);
    else if (userInput !== "" && isLoadingIconShown != true) return getEmptyBox(userInput);
    return null;
};

const getEmptyBox = userInput => (
  <div className="card-body text-center">
        <h4 style={{
            color: "red",
        }}
    >Oh No!
    </h4>
      <p className="card-text mr-0">
                No result found for "{userInput}"
    </p>
    </div>
);

const getListContent = (options, onClick) => (
    <div className="list-group">
    {options.map(item => (
          <a
              key={item.id} href="#"
              className={
                    item.isActive ?
                        "list-group-item list-group-item-action flex-row align-items-start active" :
                        "list-group-item list-group-item-action flex-row align-items-start"
                }
              onClick={(e) => {
                    e.preventDefault();
                    if (onClick && typeof onClick === "function") onClick(item.id);
                    console.log(item.name);
                }}
            >
              <div className="d-flex justify-content-start">
                    <img
                  className="rounded-circle"
                  style={{
                            height: "60px",
                            width: "60px",
                        }}
                        src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                />
                    <div className="d-flex flex-column justify-content-center">
                  <h6 className="pl-4 text-justify">{item.name}</h6>
                        <p className="pl-4">{item.description}</p>
                </div>
                </div>
            </a>
        ))}
  </div>
);

export default ({
    options, onClick, userInput, isLoadingIconShown,
}) => {
    if (userInput === "") return null;
    if (userInput !== "" && isLoadingIconShown === true) return null;
    return (
        <div className="result-box">
            <div className="card">
                {getContent(options, onClick, userInput, isLoadingIconShown)}
          </div>
      </div>
    );
};
