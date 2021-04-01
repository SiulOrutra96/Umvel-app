import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from './user.model';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'gender', 'image'];
  dataSource = new MatTableDataSource<User>([]);
  isLoading: boolean = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    // Gets the table data
    this.usersService.fetchUsers().subscribe(res => {
      this.dataSource.data = res;
      this.isLoading = false;
    });
  }

  ngAfterViewInit() {
    // Sets the paginator
    this.dataSource.paginator = this.paginator;
  }
}
