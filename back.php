<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calendar Dashboard</title>
  <style>
    table {
      border-collapse: collapse;
      width: 100%;
    }
    th, td {
      border: 1px solid black;
      padding: 8px;
      text-align: left;
    }
    th {
      background-color: #f2f2f2;
    }
  </style>
</head>
<body>
  <table id="calendar">
    <thead>
      <tr>
        <th></th>
        <?php
        $days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        foreach ($days as $day) {
          echo "<th>$day</th>";
        }
        ?>
      </tr>
    </thead>
    <tbody>
      <?php
      $hours = [];
      for ($i = 6; $i <= 22; $i++) {
        $hours[] = "$i:00";
        echo "<tr>";
        echo "<td>" . $hours[count($hours) - 1] . "</td>";
        for ($j = 0; $j < 6; $j++) {
          echo "<td></td>";
        }
        echo "</tr>";
      }
      ?>
    </tbody>
  </table>
</body>
</html>