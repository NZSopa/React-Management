import React, { Component } from 'react';
import { post } from 'axios';

class CustomerAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            userName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: ''
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.addCustomer()
            .then((response) => {
                console.log(response.data);
            })
        this.setState({
            file: null,
            userName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: ''
        })
        window.location.reload();
    }

    addCustomer = () => {
        const url = "/api/customers";
        const formData = new FormData();
        formData.append('image', this.state.file);
        formData.append('name', this.state.userName);
        formData.append('birthday', this.state.birthday);
        formData.append('gender', this.state.gender);
        formData.append('job', this.state.job);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData, config);
    }

    handleFileChange = (e) => {
        this.setState({
            file: e.target.files[0],
            fileName: e.target.value
        })
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                Profile Picture : <input type='file' name='file' file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} /><br />
                Name:<input type='text' name="username" vluae={this.state.userName} onChange={this.handleValueChange} /><br />
                Birthday:<input type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange} /><br />
                Gender:<input type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange} /><br />
                Jo