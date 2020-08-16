import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Output() createServer = new EventEmitter<{
    name: string;
    content: string;
  }>();
  @Output() createBlueprint = new EventEmitter<{
    name: string;
    content: string;
  }>();

  @Output() createPinkServer = new EventEmitter<{
    name: string;
    content: string;
  }>();

  newServerName = "";
  newServerContent = "";

  onAddServer(nameInput: HTMLInputElement) {
    this.createServer.emit({
      name: nameInput.value,
      content: this.newServerContent,
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.createBlueprint.emit({
      name: nameInput.value,
      content: this.newServerContent,
    });
  }

  onAddPinkprint() {
    this.createPinkServer.emit({
      name: this.newServerName,
      content: this.newServerContent,
    });
  }
}
