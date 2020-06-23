import { Component, OnInit } from '@angular/core';
import { UserDatabaseService } from 'src/app/services/user-database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-usuarios',
  templateUrl: './ver-usuarios.component.html',
  styleUrls: ['./ver-usuarios.component.css'],
})
export class VerUsuariosComponent implements OnInit {
  public ArrayUsuarios: Array<any> = [];

  constructor(private UserDB: UserDatabaseService, private router: Router) {
    this.UserDB.ObtenerUsuarios().subscribe(
      (value) => (this.ArrayUsuarios = value)
    );
  }

  ngOnInit(): void {}

  public IrActualizar(id: string) {
    this.router.navigate(['Actualizar', id]);
  }
}
