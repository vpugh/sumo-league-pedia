import React, { useState, useEffect } from "react";
import { getDivisions, getRanks } from "../utils/api";
import {
  Button,
  ButtonHolder,
  InputLabel,
  TextInput,
  SelectInput2
} from "../styles/wrestler-form";

const fetchDivisions = async set => {
  const data = await getDivisions();
  set(data);
};

const fetchRanks = async set => {
  const data = await getRanks();
  set(data);
};

const WrestlerForm = props => {
  const { primaryButton, primaryAction, wrestlerData } = props;
  const [name, setName] = useState((wrestlerData && wrestlerData.name) || "");
  const [division, setDivision] = useState(
    (wrestlerData && wrestlerData.division) || ""
  );
  const [rank, setRank] = useState((wrestlerData && wrestlerData.rank) || "");
  const [rankNumber, setRankNumber] = useState(
    (wrestlerData && wrestlerData.rankNumber) || ""
  );
  const [age, setAge] = useState((wrestlerData && wrestlerData.age) || "");
  const [rankDirection, setRankDirection] = useState(
    (wrestlerData && wrestlerData["rank_direction"]) || ""
  );
  const [nationality, setNationality] = useState(
    (wrestlerData && wrestlerData.nationality) || ""
  );
  const [injured, setInjured] = useState(
    (wrestlerData && wrestlerData.injured) || "false"
  );
  const [status, setStatus] = useState(
    (wrestlerData && wrestlerData.status) || "active"
  );

  const [divisionList, setDivisionList] = useState();
  const [rankList, setRankList] = useState();

  useEffect(() => {
    fetchDivisions(setDivisionList);
    fetchRanks(setRankList);
  }, []);

  const onChange = (e, set) => {
    const { value } = e.target;
    set(value);
  };

  const data = {
    name,
    division,
    rank: `${rank} ${rankNumber !== "" && rankNumber}`,
    rank_direction: rankDirection,
    nationality,
    age: Number(age),
    injured: JSON.parse(injured),
    status
  };

  const canAdd = Boolean(
    name &&
      division &&
      rank &&
      rankDirection &&
      nationality &&
      age &&
      injured &&
      status
  );

  return (
    <form onSubmit={e => primaryAction(e, data)}>
      <div>
        <InputLabel htmlFor="name">Name</InputLabel>
        <TextInput
          type="text"
          value={name}
          id="name"
          name="name"
          onChange={e => onChange(e, setName)}
        />
      </div>
      <div>
        <InputLabel htmlFor="division">Division</InputLabel>
        <SelectInput2>
          <select
            value={division}
            name="division"
            id="division"
            onChange={e => onChange(e, setDivision)}
          >
            <option defaultValue value="">
              Pick a division
            </option>
            {divisionList &&
              divisionList.map(dl => (
                <option key={dl} value={dl}>
                  {dl}
                </option>
              ))}
          </select>
        </SelectInput2>
      </div>
      <div>
        <InputLabel htmlFor="rank">Rank</InputLabel>
        <SelectInput2>
          <select
            value={rank}
            id="rank"
            name="rank"
            onChange={e => onChange(e, setRank)}
          >
            <option defaultValue value="">
              Pick a rank
            </option>
            {rankList &&
              rankList.map(rl => (
                <option key={rl} value={rl}>
                  {rl}
                </option>
              ))}
          </select>
        </SelectInput2>
        {rank === "maegashira" && (
          <TextInput
            name="rankNumber"
            value={rankNumber}
            onChange={e => onChange(e, setRankNumber)}
          />
        )}
      </div>
      <div>
        <InputLabel htmlFor="rankDirection">Rank Direction</InputLabel>
        <SelectInput2>
          <select
            value={rankDirection}
            name="rankDirection"
            id="rankDirection"
            onChange={e => onChange(e, setRankDirection)}
          >
            <option defaultValue value="">
              Pick a direction
            </option>
            <option value="east">East</option>
            <option value="west">West</option>
          </select>
        </SelectInput2>
      </div>
      <div>
        <InputLabel htmlFor="age">Age</InputLabel>
        <TextInput
          type="text"
          value={age}
          name="age"
          onChange={e => onChange(e, setAge)}
        />
      </div>
      <div>
        <InputLabel htmlFor="nationality">Nationality</InputLabel>
        <TextInput
          type="text"
          value={nationality}
          name="nationality"
          onChange={e => onChange(e, setNationality)}
        />
      </div>
      <div>
        <InputLabel htmlFor="status">Status</InputLabel>
        <SelectInput2>
          <select
            value={status}
            name="status"
            onChange={e => onChange(e, setStatus)}
          >
            <option defaultValue value="">
              Pick a status
            </option>
            <option value="active">Active</option>
            <option value="retired">Retired</option>
          </select>
        </SelectInput2>
      </div>
      <div>
        <InputLabel htmlFor="injured">Injured</InputLabel>
        <SelectInput2>
          <select
            value={injured}
            name="injured"
            onChange={e => onChange(e, setInjured)}
          >
            <option defaultValue value="">
              Pick if injured
            </option>
            <option value="false">False</option>
            <option value="true">True</option>
          </select>
        </SelectInput2>
      </div>
      <ButtonHolder>
        <Button cancel>Cancel</Button>
        <Button primary disabled={!canAdd} type="submit">
          {primaryButton}
        </Button>
      </ButtonHolder>
    </form>
  );
};

export default WrestlerForm;
