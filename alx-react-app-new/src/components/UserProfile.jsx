function UserProfile(props) {
  return (
    <div style={{ border: '1px solid gray', padding: '15px', margin: '15px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ color: 'blue', marginBottom: '10px' }}>{props.name}</h2>
      <p style={{ margin: '5px 0' }}>
        Age: <span style={{ fontWeight: 'bold', color: 'darkgreen' }}>{props.age}</span>
      </p>
      <p style={{ margin: '5px 0', fontStyle: 'italic' }}>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;
