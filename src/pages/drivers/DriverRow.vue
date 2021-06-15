<template>
  <tr>
    <th>{{ driver.id }}</th>
    <td>{{ driver.fullName }}</td>
    <td>{{ driver.iDNumber }}</td>
    <td>{{ driver.dayOfBirth }}</td>
    <td>{{ driver.address }}</td>
    <td>{{ driver.contractType }}</td>
    <td>{{ driver.status }}</td>
  </tr>
</template>

<script>
export default {
  props: ['driver'],
};
</script>
