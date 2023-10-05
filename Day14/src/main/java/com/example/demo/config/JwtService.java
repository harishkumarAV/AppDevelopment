package com.config;



import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import javax.crypto.SecretKey;


import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtService {
    private static final String SECRET_KEY =  "4CEVfZNS2vHGfmlodkmkoYBs19NCmqp4TOXQ4KGaZIux57J/YxKQLWMg/cM9N4hyyyFBegz+c9DSSgr6ThdAZj6+3yGU1sIIZYUXCKFx3/7QS3foIPEasf31qXcEUiR51UhRYsyBUB/BJDZ/0kWz2FSaoHQHQRIKlIPeDaF3D3Jt+7TvbcPfKxLbeDjVqnXAusEm5HfJDCrDcbwWgp/I5ZiF/SvwJgJb3UdOT3TxpRjksBkPyVKVVmM+S3N0pqX9if/Q/ZNk1utEcTgYyjqJ4NzIFRq/RCW7xZTrTnqV0Vuaa6pKxctKSgy305aIq4lX6CuXNSAkXQpAQFAGT4P3mMx4EEVzQTu0p5A3FZVz6/k=";

    
    public <T> T extractClaim(String token, Function<Claims, T>claimsResolver){
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    public String generateToken(UserDetails userDetails){
        return generateToken(new HashMap<>(), userDetails);
    }

    

    private String generateToken(
        Map<String, Object> extraClaims,
        UserDetails userDetails
        
    ) {
        return Jwts
        .builder()
        .setClaims(extraClaims)
        .setSubject(userDetails.getUsername())
        .setIssuedAt(new Date(System.currentTimeMillis()))
        .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 24))
        .signWith(getSignInKey(), SignatureAlgorithm.HS256)
        .compact();
    }

    public boolean isTokenValid(String token, UserDetails userDetails){
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername())) && !isTokenExpired(token);
    }

    private boolean isTokenExpired(String token){
        return extractExpiration(token).before(new Date());
    }


   

    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }


  private Claims extractAllClaims(String token){
    return Jwts
    .parserBuilder()
    .setSigningKey(getSignInKey())
    .build()
    .parseClaimsJws(token)
    .getBody();

  }

  private SecretKey getSignInKey(){
    byte[] keybytes = Decoders.BASE64.decode(SECRET_KEY);
    return Keys.hmacShaKeyFor(keybytes);
  }

    
      





}