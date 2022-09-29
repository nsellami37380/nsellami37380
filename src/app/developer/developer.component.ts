import { Component, OnInit } from "@angular/core";
import { Developer } from "../models/developer.model";
import { Skill } from "../models/skill.model";

@Component({
  selector: "app-developer",
  templateUrl: "./developer.component.html",
  styleUrls: ["./developer.component.scss"]
})
export class DeveloperComponent implements OnInit {
  developer: Developer = new Developer("Doe", "John", 28, "M", "bio1", [
    new Skill("name1", "logo1", "site 1"),
    new Skill("name2", "logo2", "site 2"),
    new Skill("name3", "logo3", "site 3")
  ]);

  constructor() {}

  ngOnInit(): void {}
}
